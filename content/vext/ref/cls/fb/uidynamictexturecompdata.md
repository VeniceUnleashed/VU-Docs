---
title: UIDynamicTextureCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIDynamicTextureCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UIDynamicTextureCompData(UIDynamicTextureCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIDynamicTextureCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIDynamicTextureCompData](UIDynamicTextureCompData).                  |
| UIDynamicTextureCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIDynamicTextureCompData](UIDynamicTextureCompData).                                      |
| UIDynamicTextureCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIDynamicTextureCompData](UIDynamicTextureCompData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDynamicTextureCompData](UIDynamicTextureCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIDynamicTextureCompData](UIDynamicTextureCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
