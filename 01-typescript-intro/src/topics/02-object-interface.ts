
const skills: string[] = ['Bash','Counter','Healing'];

interface Character{
    name: String;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter']
}

strider.hometown = 'Rivendell';

console.table(strider)

export{};