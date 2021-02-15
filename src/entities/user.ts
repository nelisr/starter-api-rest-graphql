import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Profile } from './profile'

@Entity({ name: 'tb_users', schema: 'security' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Profile, profile => profile.users, { nullable: false })
    @JoinColumn({ name: 'profile_id' })
    profile: Profile
}
