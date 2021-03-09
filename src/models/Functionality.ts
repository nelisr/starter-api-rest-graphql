import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import ProfileFunctionality from './ProfileFunctionality'
import Application from './Application'
import ControlProfileFunctionality from './ControlProfileFunctionality'

@Entity({ name: 'tb_functionalities', schema: 'manager' })
export default class Functionality {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ unique: true, nullable: false })
    public key: string;

    @OneToMany(() => ProfileFunctionality, pf => pf.functionality)
    public profileFunctionality: ProfileFunctionality[]

    @ManyToOne(() => Application, app => app.functionality, { nullable: false })
    @JoinColumn({ name: 'application_id' })
    public application: Application;

    @OneToMany(() => ControlProfileFunctionality, pf => pf.functionality)
    public controlProfileFunctionality: ControlProfileFunctionality[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
