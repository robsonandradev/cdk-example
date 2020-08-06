"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsClusterHandler = void 0;
const aws_ecs_1 = require("@aws-cdk/aws-ecs");
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
class EcsClusterHandler {
    static createCluster(stack, vpc) {
        const cluster = new aws_ecs_1.Cluster(stack, 'EcsCluster', { vpc });
        cluster.addCapacity('DefaultAutoScalingGroup', {
            instanceType: aws_ec2_1.InstanceType.of(aws_ec2_1.InstanceClass.T2, aws_ec2_1.InstanceSize.MICRO)
        });
        return cluster;
    }
}
exports.EcsClusterHandler = EcsClusterHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLWNsdXN0ZXItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVjcy1jbHVzdGVyLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQTJDO0FBQzNDLDhDQUUwQjtBQUUxQixNQUFhLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWdCLEVBQUUsR0FBUztRQUM5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFMUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRTtZQUM3QyxZQUFZLEVBQUUsc0JBQVksQ0FBQyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxFQUFFLEVBQUUsc0JBQVksQ0FBQyxLQUFLLENBQUM7U0FDcEUsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBVkQsOENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IENsdXN0ZXIgfSBmcm9tICdAYXdzLWNkay9hd3MtZWNzJztcbmltcG9ydCB7IFxuICBJbnN0YW5jZVR5cGUsIEluc3RhbmNlQ2xhc3MsIEluc3RhbmNlU2l6ZSwgSVZwYyBcbn0gZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XG5cbmV4cG9ydCBjbGFzcyBFY3NDbHVzdGVySGFuZGxlciB7XG4gIHN0YXRpYyBjcmVhdGVDbHVzdGVyKHN0YWNrOiBDb25zdHJ1Y3QsIHZwYzogSVZwYykge1xuICAgIGNvbnN0IGNsdXN0ZXIgPSBuZXcgQ2x1c3RlcihzdGFjaywgJ0Vjc0NsdXN0ZXInLCB7IHZwYyB9KTtcbiAgICBcbiAgICBjbHVzdGVyLmFkZENhcGFjaXR5KCdEZWZhdWx0QXV0b1NjYWxpbmdHcm91cCcsIHtcbiAgICAgIGluc3RhbmNlVHlwZTogSW5zdGFuY2VUeXBlLm9mKEluc3RhbmNlQ2xhc3MuVDIsIEluc3RhbmNlU2l6ZS5NSUNSTylcbiAgICB9KTtcblxuICAgIHJldHVybiBjbHVzdGVyO1xuICB9XG59XG4iXX0=