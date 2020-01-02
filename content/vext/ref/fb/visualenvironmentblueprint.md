---
title: VisualEnvironmentBlueprint
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentBlueprint()                                                          | Create a new instance of this container type.                                                                                               |
| VisualEnvironmentBlueprint(VisualEnvironmentBlueprint other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| VisualEnvironmentBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint).                  |
| VisualEnvironmentBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint).                              |
| VisualEnvironmentBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint).                      |
| VisualEnvironmentBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint).                          |
| VisualEnvironmentBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint).                                      |
| VisualEnvironmentBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
