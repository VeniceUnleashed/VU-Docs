---
title: EditableActionMap
---


## Summary
### Constructors
| |
| ----------- |
| **[EditableActionMap](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | string |
| {{< prop "nameId" >}} | string |
| {{< prop "actionMap" >}} | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata) \| nil |
| {{< prop "configurationLayout" >}} | [EditableActions](/vext/ref/fb/editableactions) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EditableActionMap](/vext/ref/fb/editableactionmap) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EditableActionMap" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EditableActionMap {#constructor-0}
> **EditableActionMap**()

Creates a new [EditableActionMap](/vext/ref/fb/editableactionmap) frostbite structure.

## Properties
### {{% prop-heading "id" %}}
> **string**

### {{% prop-heading "nameId" %}}
> **string**

### {{% prop-heading "actionMap" %}}
> **[EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata)** | **nil**

### {{% prop-heading "configurationLayout" %}}
> **[EditableActions](/vext/ref/fb/editableactions)**

## Methods
### Clone
> **Clone**(): [EditableActionMap](/vext/ref/fb/editableactionmap)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EditableActionMap](/vext/ref/fb/editableactionmap)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EditableActionMap](/vext/ref/fb/editableactionmap) type.

