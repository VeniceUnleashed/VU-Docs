---
title: VisualEnvironmentBlueprint
---
### Base Classes

[ObjectBlueprint](/vext/ref/fb/objectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentBlueprint()                                                          | Create a new instance of this container type.                                                                                               |
| VisualEnvironmentBlueprint(VisualEnvironmentBlueprint other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| VisualEnvironmentBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/).                  |
| VisualEnvironmentBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/).                              |
| VisualEnvironmentBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/).                      |
| VisualEnvironmentBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/).                          |
| VisualEnvironmentBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/).                                      |
| VisualEnvironmentBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
