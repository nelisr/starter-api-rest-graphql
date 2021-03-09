import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import User from './User'
import ProfileFunctionality from './ProfileFunctionality'

@Entity({ name: 'tb_profiles', schema: 'manager' })
export default class Profile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ unique: true, nullable: false })
    public key: string;

    @OneToMany(() => User, user => user.profile)
    public users: User[]

    @OneToMany(() => ProfileFunctionality, pf => pf.profile)
    public profileFunctionality: ProfileFunctionality[]

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
