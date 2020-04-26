---
title: TextUnlockPartData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TextUnlockPartData](#constructor-0)**() |
| **[TextUnlockPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TextUnlockPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "shaderNodeName" >}} | string |
| {{< prop "meshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TextUnlockPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TextUnlockPartData {#constructor-0}
> **TextUnlockPartData**()

Creates a new [TextUnlockPartData](/vext/ref/fb/textunlockpartdata) frostbite instance.

### TextUnlockPartData {#constructor-1}
> **TextUnlockPartData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TextUnlockPartData](/vext/ref/fb/textunlockpartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TextUnlockPartData {#constructor-2}
> **TextUnlockPartData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextUnlockPartData](/vext/ref/fb/textunlockpartdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TextUnlockPartData](/vext/ref/fb/textunlockpartdata). |

## Properties
### {{% prop-heading "shaderNodeName" %}}
> **string**

### {{% prop-heading "meshBlueprint" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TextUnlockPartData](/vext/ref/fb/textunlockpartdata) type.

