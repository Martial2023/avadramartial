
interface SkillLevelProps {
    src: string,
    alt: string,
    level: number,
    color: string
}

interface CustomCSSProperties extends React.CSSProperties {
    "--level"?: number;
    "--accent"?: string;
}


const SkillLevel: React.FC<SkillLevelProps> = ({ src, alt, level, color }) => {
    return (
        <div>
            <div
                className="relative w-24 h-24 rounded-full skill-circle p-2"
                style={{
                    "--level": level, // Proportion du remplissage
                    "--accent": color,
                } as CustomCSSProperties}
            >
                <div className="absolute inset-[4px] rounded-full overflow-hidden flex items-center justify-center">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-fit rounded-full bg-gray-900 p-2"
                    />
                </div>
            </div>
            <p className="text-sm text-center mt-1">{alt}</p>
        </div>
    );
};

export default SkillLevel;
