import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Profile from './Profile'
import Functionality from './Functionality'

@Entity({ name: 'tb_profiles_tb_functionalities', schema: 'manager' })
export default class ProfileFunctionality {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Profile, profile => profile.profileFunctionality, { nullable: false })
    @JoinColumn({ name: 'profile_id' })
    public profile: Profile;

    @ManyToOne(() => Functionality, func => func.profileFunctionality, { nullable: false })
    @JoinColumn({ name: 'functionality_id' })
    public functionality: Functionality;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
