---
title: FakeHingeData
---
### Base Classes

[FakePhysicsData](FakePhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| FakeHingeData()                                                          | Create a new instance of this container type.                                                                     |
| FakeHingeData(FakeHingeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| FakeHingeData([FakePhysicsData](FakePhysicsData) other)                  | Upcast an instance of type [FakePhysicsData](FakePhysicsData) to [FakeHingeData](FakeHingeData).                  |
| FakeHingeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FakeHingeData](FakeHingeData). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| pivot                | [Vec3](/vext/ref/shared/class/Vec3) |             |
| rotationAxis         | [Vec3](/vext/ref/shared/class/Vec3) |             |
| extensionAxis        | [Vec3](/vext/ref/shared/class/Vec3) |             |
| minAngle             | number                            |             |
| maxAngle             | number                            |             |
| angularDampening     | number                            |             |
| pullbackAcceleration | number                            |             |
| progressiveExponent  | number                            |             |
| inertiaModifier      | number                            |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [FakeHingeData](FakeHingeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FakeHingeData](FakeHingeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
