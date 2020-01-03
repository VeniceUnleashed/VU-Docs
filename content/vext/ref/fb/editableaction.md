---
title: EditableAction
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| EditableAction()                                                          | Create a new instance of this container type.                                                                       |
| EditableAction(EditableAction other)                                      | Create a reference copy of an instance of the same type.                                                            |
| EditableAction([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EditableAction](/vext/ref/fb/editableaction/). |

## Properties

| Name    | Type                                               | Description |
| ------- | -------------------------------------------------- | ----------- |
| concept | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [EditableAction](/vext/ref/fb/editableaction/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EditableAction](/vext/ref/fb/editableaction/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
