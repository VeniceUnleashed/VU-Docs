---
title: EditableActionMap
---

## Summary

### Constructors

|  |
| --- |
| **[EditableActionMap](#constructor-0)**() |
| **[EditableActionMap](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | string |
| {{< prop "nameId" >}} | string |
| {{< prop "actionMap" >}} | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) \| nil |
| {{< prop "configurationLayout" >}} | [EditableActions](/vext/ref/fb/editableactions) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EditableActionMap](/vext/ref/fb/editableactionmap) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EditableActionMap" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EditableActionMap {#constructor-0}

> **EditableActionMap**()

Creates a new [EditableActionMap](/vext/ref/fb/editableactionmap) frostbite instance.

### EditableActionMap {#constructor-1}

> **EditableActionMap**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EditableActionMap](/vext/ref/fb/editableactionmap) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "id" %}}

> **string**

### {{% prop-heading "nameId" %}}

> **string**

### {{% prop-heading "actionMap" %}}

> **[EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata)** \| **nil**

### {{% prop-heading "configurationLayout" %}}

> **[EditableActions](/vext/ref/fb/editableactions)**

## Methods

### Clone {#clone}

> **Clone**(): [EditableActionMap](/vext/ref/fb/editableactionmap)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EditableActionMap](/vext/ref/fb/editableactionmap)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EditableActionMap](/vext/ref/fb/editableactionmap) type.

