---
title: PersistentValueTemplateData
---


## Summary
### Constructors
| |
| ----------- |
| **[PersistentValueTemplateData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "defaultValue" >}} | string |
| {{< prop "defaultFloatValue" >}} | float |
| {{< prop "defaultIntValue" >}} | int |
| {{< prop "valueType" >}} | [PersistentValueType](/vext/ref/fb/persistentvaluetype) |
| {{< prop "dataType" >}} | [PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype) |
| {{< prop "historyType" >}} | [PersistentValueHistoryType](/vext/ref/fb/persistentvaluehistorytype) |
| {{< prop "group" >}} | [AwardGroup](/vext/ref/fb/awardgroup) |
| {{< prop "clubStat" >}} | bool |
| {{< prop "forceIntoTemplate" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PersistentValueTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PersistentValueTemplateData {#constructor-0}
> **PersistentValueTemplateData**()

Creates a new [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "defaultValue" %}}
> **string**

### {{% prop-heading "defaultFloatValue" %}}
> **float**

### {{% prop-heading "defaultIntValue" %}}
> **int**

### {{% prop-heading "valueType" %}}
> **[PersistentValueType](/vext/ref/fb/persistentvaluetype)**

### {{% prop-heading "dataType" %}}
> **[PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype)**

### {{% prop-heading "historyType" %}}
> **[PersistentValueHistoryType](/vext/ref/fb/persistentvaluehistorytype)**

### {{% prop-heading "group" %}}
> **[AwardGroup](/vext/ref/fb/awardgroup)**

### {{% prop-heading "clubStat" %}}
> **bool**

### {{% prop-heading "forceIntoTemplate" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) type.

