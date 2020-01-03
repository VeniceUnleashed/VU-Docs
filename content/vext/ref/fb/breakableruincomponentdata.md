---
title: BreakableRuinComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BreakableRuinComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| BreakableRuinComponentData(BreakableRuinComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| BreakableRuinComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/).                      |
| BreakableRuinComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/).                    |
| BreakableRuinComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/).              |
| BreakableRuinComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/). |

## Properties

| Name      | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| ruinModel | [ObjectBlueprint](/vext/ref/fb/objectblueprint/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BreakableRuinComponentData](/vext/ref/fb/breakableruincomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
