---
title: LogicPrefabBlueprint
---
### Base Classes

[PrefabBlueprint](/vext/ref/fb/prefabblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LogicPrefabBlueprint()                                                          | Create a new instance of this container type.                                                                                   |
| LogicPrefabBlueprint(LogicPrefabBlueprint other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LogicPrefabBlueprint([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/).                  |
| LogicPrefabBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/).                              |
| LogicPrefabBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/).                      |
| LogicPrefabBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/).                          |
| LogicPrefabBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/).                                      |
| LogicPrefabBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LogicPrefabBlueprint](/vext/ref/fb/logicprefabblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
