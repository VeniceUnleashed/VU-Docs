---
title: CameraEnterAreaTriggerEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CameraEnterAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| CameraEnterAreaTriggerEntityData(CameraEnterAreaTriggerEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| CameraEnterAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData).                            |
| CameraEnterAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData).                    |
| CameraEnterAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData).              |
| CameraEnterAreaTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| realm        | [Realm](Realm)           |             |
| timeTreshold | number                   |             |
| updatePass   | [UpdatePass](UpdatePass) |             |
| autoStart    | bool                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraEnterAreaTriggerEntityData](CameraEnterAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
