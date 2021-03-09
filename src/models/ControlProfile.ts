import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Profile from './Profile'
import Application from './Application'
import User from './User'
import ControlProfileFunctionality from './ControlProfileFunctionality'

@Entity({ name: 'tb_control_profiles', schema: 'manager' })
export default class ControlProfile {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Profile, profile => profile.controlProfile, { nullable: false })
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;

    @ManyToOne(() => Application, app => app.controlProfile, { nullable: false })
    @JoinColumn({ name: 'application_id' })
    public application: Application;

    @ManyToOne(() => User, user => user.controlProfile, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    public user: User;

    @OneToMany(() => ControlProfileFunctionality, pf => pf.controlProfile)
    public controlProfileFunctionality: ControlProfileFunctionality[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
