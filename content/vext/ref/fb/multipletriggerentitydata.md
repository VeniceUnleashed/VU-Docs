---
title: MultipleTriggerEntityData
---
### Base Classes

[TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| MultipleTriggerEntityData(MultipleTriggerEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| MultipleTriggerEntityData([TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) other)    | Upcast an instance of type [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).    |
| MultipleTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).              |
| MultipleTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).                    |
| MultipleTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).              |
| MultipleTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).                            |
| MultipleTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).                    |
| MultipleTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/).              |
| MultipleTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| triggerAmount | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultipleTriggerEntityData](/vext/ref/fb/multipletriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
