---
title: PersistentValueTemplateData
---

## Summary

### Constructors

|  |
| --- |
| **[PersistentValueTemplateData](#constructor-0)**() |
| **[PersistentValueTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

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
| ------ | ------- |
| **[Clone](#clone)**() | [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistentValueTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistentValueTemplateData {#constructor-0}

> **PersistentValueTemplateData**()

Creates a new [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) frostbite instance.

### PersistentValueTemplateData {#constructor-1}

> **PersistentValueTemplateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

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

### Clone {#clone}

> **Clone**(): [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) type.

