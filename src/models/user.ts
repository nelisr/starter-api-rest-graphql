import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Profile from './Profile'

@Entity({ name: 'tb_users', schema: 'manager' })
export default class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ unique: true, nullable: false })
    email: string

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: false })
    password: string

    @ManyToOne(() => Profile, profile => profile.users, { nullable: false })
    @JoinColumn({ name: 'profile_id' })
    profile: Profile;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date
}
