---
title: UnderFireTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UnderFireTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| UnderFireTriggerEntityData(UnderFireTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UnderFireTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).              |
| UnderFireTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).                    |
| UnderFireTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).              |
| UnderFireTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).                            |
| UnderFireTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).                    |
| UnderFireTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/).              |
| UnderFireTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| radius                     | number                                         |             |
| coolDownTime               | number                                         |             |
| triggerOnMaterialOnly      | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| triggeredBy                | [AreaTriggerInclude](/vext/ref/fb/areatriggerinclude/)       |             |
| disableIfTrackEntityIsLost | bool                                           |             |
| randomYaw                  | bool                                           |             |
| indicateHit                | bool                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
