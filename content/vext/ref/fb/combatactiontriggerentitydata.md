---
title: CombatActionTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CombatActionTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| CombatActionTriggerEntityData(CombatActionTriggerEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CombatActionTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).              |
| CombatActionTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).                    |
| CombatActionTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).              |
| CombatActionTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).                            |
| CombatActionTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).                    |
| CombatActionTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/).              |
| CombatActionTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| timeToTriggerOnNoAction | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CombatActionTriggerEntityData](/vext/ref/fb/combatactiontriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
