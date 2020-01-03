---
title: UITextureStreamingComponentData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| UITextureStreamingComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| UITextureStreamingComponentData(UITextureStreamingComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| UITextureStreamingComponentData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UITextureStreamingComponentData](UITextureStreamingComponentData).                  |
| UITextureStreamingComponentData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITextureStreamingComponentData](UITextureStreamingComponentData).                                      |
| UITextureStreamingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITextureStreamingComponentData](UITextureStreamingComponentData). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UITextureStreamingComponentData](UITextureStreamingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITextureStreamingComponentData](UITextureStreamingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
