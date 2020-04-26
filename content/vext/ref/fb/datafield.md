---
title: DataField
---


## Summary
### Constructors
| |
| ----------- |
| **[DataField](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | string |
| {{< prop "valueRef" >}} | [DataContainer](/vext/ref/shared/class/datacontainer) \| nil |
| {{< prop "id" >}} | int |
| {{< prop "accessType" >}} | [FieldAccessType](/vext/ref/fb/fieldaccesstype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DataField](/vext/ref/fb/datafield) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataField" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataField {#constructor-0}
> **DataField**()

Creates a new [DataField](/vext/ref/fb/datafield) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **string**

### {{% prop-heading "valueRef" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)** | **nil**

### {{% prop-heading "id" %}}
> **int**

### {{% prop-heading "accessType" %}}
> **[FieldAccessType](/vext/ref/fb/fieldaccesstype)**

## Methods
### Clone
> **Clone**(): [DataField](/vext/ref/fb/datafield)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DataField](/vext/ref/fb/datafield)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataField](/vext/ref/fb/datafield) type.

