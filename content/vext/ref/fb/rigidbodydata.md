---
title: RigidBodyData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| RigidBodyData()                                                          | Create a new instance of this container type.                                                                     |
| RigidBodyData(RigidBodyData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| RigidBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyData](RigidBodyData). |

## Properties

| Name                                | Type                                                   | Description |
| ----------------------------------- | ------------------------------------------------------ | ----------- |
| inertiaModifier                     | [Vec3](/vext/ref/shared/class/Vec3)                      |             |
| rigidBodyType                       | [RigidBodyType](RigidBodyType)                         |             |
| mass                                | number                                                 |             |
| restitution                         | number                                                 |             |
| friction                            | number                                                 |             |
| angularVelocityDamping              | number                                                 |             |
| linearVelocityDamping               | number                                                 |             |
| interactionToolkitCollisionVolumeId | number                                                 |             |
| motionType                          | [RigidBodyMotionType](RigidBodyMotionType)             |             |
| qualityType                         | [RigidBodyQualityType](RigidBodyQualityType)           |             |
| collisionLayer                      | [RigidBodyCollisionLayer](RigidBodyCollisionLayer)     |             |
| floatPhysics                        | [FloatPhysicsData](FloatPhysicsData)                   |             |
| constraints                         | [RigidBodyConstraintData](RigidBodyConstraintData)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RigidBodyData](RigidBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyData](RigidBodyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
