import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Functionality from './Functionality'
import ControlProfile from './ControlProfile'

@Entity({ name: 'tb_control_profiles_tb_functionalities', schema: 'manager' })
export default class ControlProfileFunctionality {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Functionality, func => func.controlProfileFunctionality, { nullable: false })
    @JoinColumn({ name: 'functionality_id' })
    public functionality: Functionality;

    @ManyToOne(() => ControlProfile, cp => cp.controlProfileFunctionality, { nullable: false })
    @JoinColumn({ name: 'control_profile_id' })
    public controlProfile: ControlProfile;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
