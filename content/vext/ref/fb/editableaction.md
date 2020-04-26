---
title: EditableAction
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EditableAction](#constructor-0)**() |
| **[EditableAction](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EditableAction](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "concept" >}} | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EditableAction" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EditableAction {#constructor-0}
> **EditableAction**()

Creates a new [EditableAction](/vext/ref/fb/editableaction) frostbite instance.

### EditableAction {#constructor-1}
> **EditableAction**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EditableAction](/vext/ref/fb/editableaction) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EditableAction {#constructor-2}
> **EditableAction**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EditableAction](/vext/ref/fb/editableaction). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EditableAction](/vext/ref/fb/editableaction). |

## Properties
### {{% prop-heading "concept" %}}
> **[InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EditableAction](/vext/ref/fb/editableaction) type.

