---
title: CustomReportValueData
---


## Summary
### Constructors
| |
| ----------- |
| **[CustomReportValueData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "kind" >}} | [CustomReportValueKind](/vext/ref/fb/customreportvaluekind) |
| {{< prop "dataType" >}} | [PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CustomReportValueData](/vext/ref/fb/customreportvaluedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CustomReportValueData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CustomReportValueData {#constructor-0}
> **CustomReportValueData**()

Creates a new [CustomReportValueData](/vext/ref/fb/customreportvaluedata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "kind" %}}
> **[CustomReportValueKind](/vext/ref/fb/customreportvaluekind)**

### {{% prop-heading "dataType" %}}
> **[PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype)**

## Methods
### Clone
> **Clone**(): [CustomReportValueData](/vext/ref/fb/customreportvaluedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CustomReportValueData](/vext/ref/fb/customreportvaluedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CustomReportValueData](/vext/ref/fb/customreportvaluedata) type.

