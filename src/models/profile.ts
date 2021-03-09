import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import ProfileFunctionality from './ProfileFunctionality'
import ControlProfile from './ControlProfile'

@Entity({ name: 'tb_profiles', schema: 'manager' })
export default class Profile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ unique: true, nullable: false })
    public key: string;

    @OneToMany(() => ProfileFunctionality, pf => pf.profile)
    public profileFunctionality: ProfileFunctionality[]

    @OneToMany(() => ControlProfile, pf => pf.profile)
    public controlProfile: ControlProfile[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
