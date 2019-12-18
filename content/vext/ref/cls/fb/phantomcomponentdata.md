---
title: PhantomComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PhantomComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| PhantomComponentData(PhantomComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PhantomComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [PhantomComponentData](PhantomComponentData).                      |
| PhantomComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhantomComponentData](PhantomComponentData).                    |
| PhantomComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhantomComponentData](PhantomComponentData).              |
| PhantomComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhantomComponentData](PhantomComponentData). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| boxSize                  | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| asyncQueryPointerAsset   | [AntRef](AntRef)                  |             |
| enableTrajectoryOverride | [AntRef](AntRef)                  |             |
| trajectoryOverride       | [AntRef](AntRef)                  |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhantomComponentData](PhantomComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhantomComponentData](PhantomComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
