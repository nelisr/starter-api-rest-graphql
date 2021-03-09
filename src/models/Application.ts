import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Functionality from './Functionality'
import ControlProfile from './ControlProfile'
import AuthLog from './AuthLog'

@Entity({ name: 'tb_applications', schema: 'manager' })
export default class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    initials: string;

    @OneToMany(() => Functionality, func => func.application)
    public functionality: Functionality[]

    @OneToMany(() => ControlProfile, pf => pf.application)
    public controlProfile: ControlProfile[]

    @OneToMany(() => AuthLog, pf => pf.application)
    public authLog: AuthLog[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
