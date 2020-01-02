---
title: UIManageServerPresetsCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIManageServerPresetsCompData()                                                          | Create a new instance of this container type.                                                                                                     |
| UIManageServerPresetsCompData(UIManageServerPresetsCompData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| UIManageServerPresetsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIManageServerPresetsCompData](UIManageServerPresetsCompData).                  |
| UIManageServerPresetsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIManageServerPresetsCompData](UIManageServerPresetsCompData).                                      |
| UIManageServerPresetsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIManageServerPresetsCompData](UIManageServerPresetsCompData). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManageServerPresetsCompData](UIManageServerPresetsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIManageServerPresetsCompData](UIManageServerPresetsCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
