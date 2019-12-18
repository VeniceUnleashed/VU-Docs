---
title: UITextureStreamingComponentData (Frostbite Container)
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
| UITextureStreamingComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UITextureStreamingComponentData](UITextureStreamingComponentData). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UITextureStreamingComponentData](UITextureStreamingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UITextureStreamingComponentData](UITextureStreamingComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
