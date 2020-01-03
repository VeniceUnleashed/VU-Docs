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
| RigidBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyData](/vext/ref/fb/rigidbodydata/). |

## Properties

| Name                                | Type                                                   | Description |
| ----------------------------------- | ------------------------------------------------------ | ----------- |
| inertiaModifier                     | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| rigidBodyType                       | [RigidBodyType](/vext/ref/fb/rigidbodytype/)                         |             |
| mass                                | number                                                 |             |
| restitution                         | number                                                 |             |
| friction                            | number                                                 |             |
| angularVelocityDamping              | number                                                 |             |
| linearVelocityDamping               | number                                                 |             |
| interactionToolkitCollisionVolumeId | number                                                 |             |
| motionType                          | [RigidBodyMotionType](/vext/ref/fb/rigidbodymotiontype/)             |             |
| qualityType                         | [RigidBodyQualityType](/vext/ref/fb/rigidbodyqualitytype/)           |             |
| collisionLayer                      | [RigidBodyCollisionLayer](/vext/ref/fb/rigidbodycollisionlayer/)     |             |
| floatPhysics                        | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata/)                   |             |
| constraints                         | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RigidBodyData](/vext/ref/fb/rigidbodydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidBodyData](/vext/ref/fb/rigidbodydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
