import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import Application from './Application'
import User from './User'

@Entity({ name: 'tb_auth_logs', schema: 'manager' })
export default class AuthLog {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false })
    public dateAccess: Date

    @ManyToOne(() => Application, app => app.authLog, { nullable: false })
    @JoinColumn({ name: 'application_id' })
    public application: Application;

    @ManyToOne(() => User, user => user.authLog, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    public user: User;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt: Date;
}
