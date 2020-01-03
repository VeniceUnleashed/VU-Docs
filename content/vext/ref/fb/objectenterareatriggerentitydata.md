---
title: ObjectEnterAreaTriggerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ObjectEnterAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| ObjectEnterAreaTriggerEntityData(ObjectEnterAreaTriggerEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| ObjectEnterAreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/).                            |
| ObjectEnterAreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/).                    |
| ObjectEnterAreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/).              |
| ObjectEnterAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| realm      | [Realm](/vext/ref/fb/realm/)           |             |
| updatePass | [UpdatePass](/vext/ref/fb/updatepass/) |             |
| autoStart  | bool                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ObjectEnterAreaTriggerEntityData](/vext/ref/fb/objectenterareatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
