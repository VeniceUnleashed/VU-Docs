---
title: CameraEnterAreaTriggerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CameraEnterAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| CameraEnterAreaTriggerEntityData(CameraEnterAreaTriggerEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| CameraEnterAreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/).                            |
| CameraEnterAreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/).                    |
| CameraEnterAreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/).              |
| CameraEnterAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| realm        | [Realm](/vext/ref/fb/realm/)           |             |
| timeTreshold | number                   |             |
| updatePass   | [UpdatePass](/vext/ref/fb/updatepass/) |             |
| autoStart    | bool                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraEnterAreaTriggerEntityData](/vext/ref/fb/cameraenterareatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
