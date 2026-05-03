import React, { useState, useRef, useEffect, useMemo } from 'react';

type IconComponentType = React.ElementType<{ className?: string, size?: number, strokeWidth?: number }>;
export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  url?: string;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
}

const defaultAccentColor = 'var(--component-active-color-default)';

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ items, accentColor }) => {

  const finalItems = useMemo(() => {
     if (!items || !Array.isArray(items) || items.length === 0) {
        return [];
     }
     return items;
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
      if (activeIndex >= finalItems.length) {
          setActiveIndex(0);
      }
  }, [finalItems, activeIndex]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty('--lineWidth', `${textWidth}px`);
      }
    };

    setLineWidth();

    window.addEventListener('resize', setLineWidth);
    return () => {
      window.removeEventListener('resize', setLineWidth);
    };
  }, [activeIndex, finalItems]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const navStyle = useMemo(() => {
      const activeColor = accentColor || defaultAccentColor;
      return { '--component-active-color': activeColor } as React.CSSProperties;
  }, [accentColor]); 

  return (
    <nav
      className="menu fixed bottom-0 left-0 w-full z-50 md:hidden"
      role="navigation"
      style={navStyle}
    >
      <div className="flex items-center justify-around bg-[var(--component-bg)] border-t border-[var(--component-shadow)] pb-safe pt-2 px-2">
        {finalItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isTextActive = isActive;

          const IconComponent = item.icon;

          return (
            <a
              key={item.label}
              href={item.url || "#"}
              className={`menu__item relative flex flex-col items-center justify-center flex-1 py-2 text-[var(--component-inactive-color)] transition-colors ${isActive ? 'active text-[var(--component-active-color)]' : ''}`}
              onClick={() => handleItemClick(index)}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ '--lineWidth': '0px' } as React.CSSProperties} 
            >
              {isActive && (
                <div 
                  className="absolute top-0 h-[3px] bg-[var(--component-active-color)] rounded-b-md transition-all duration-300 ease-in-out" 
                  style={{ width: 'var(--lineWidth, 20px)' }}
                />
              )}
              <div className={`menu__icon mb-1 ${isActive ? 'animate-[iconBounce_0.5s_ease]' : ''}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <strong
                className={`menu__text text-[10px] font-medium tracking-wide transition-all duration-300 overflow-hidden ${isTextActive ? 'opacity-100 max-h-4' : 'opacity-0 max-h-0'}`}
                ref={(el) => (textRefs.current[index] = el)}
              >
                {item.label}
              </strong>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export { InteractiveMenu };
