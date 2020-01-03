---
title: StatEventTriggerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| StatEventTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| StatEventTriggerEntityData(StatEventTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| StatEventTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/).                    |
| StatEventTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/).              |
| StatEventTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/).                            |
| StatEventTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/).                    |
| StatEventTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/).              |
| StatEventTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/). |

## Properties

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| statEvent  | [StatEvent](/vext/ref/fb/statevent/) |             |
| miscParamX | string                 |             |
| miscParamY | string                 |             |
| sendToAll  | bool                   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatEventTriggerEntityData](/vext/ref/fb/stateventtriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
