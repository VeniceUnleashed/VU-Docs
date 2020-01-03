---
title: BreakablePartComponentData
---
### Base Classes

[DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| BreakablePartComponentData()                                                                   | Create a new instance of this container type.                                                                                                        |
| BreakablePartComponentData(BreakablePartComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                                             |
| BreakablePartComponentData([DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/) other) | Upcast an instance of type [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/). |
| BreakablePartComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                               | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/).                               |
| BreakablePartComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                             | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/).                             |
| BreakablePartComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                       | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/).                       |
| BreakablePartComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/).          |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| healthPercentage            | number |             |
| collapsable                 | bool   |             |
| destroyNearbyStaticEntities | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BreakablePartComponentData](/vext/ref/fb/breakablepartcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
