---
title: MaterialGridData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[MaterialGridData](#constructor-0)**() |
| **[MaterialGridData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialGridData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MaterialGridData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultMaterial" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "materialPairs" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair)[] |
| {{< prop "materialIndexMap" >}} | int[] |
| {{< prop "defaultMaterialIndex" >}} | int |
| {{< prop "materialProperties" >}} | [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)[] |
| {{< prop "interactionGrid" >}} | [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialGridData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialGridData {#constructor-0}

> **MaterialGridData**()

Creates a new [MaterialGridData](/vext/ref/fb/materialgriddata) frostbite instance.

### MaterialGridData {#constructor-1}

> **MaterialGridData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialGridData](/vext/ref/fb/materialgriddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialGridData {#constructor-2}

> **MaterialGridData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MaterialGridData](/vext/ref/fb/materialgriddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MaterialGridData](/vext/ref/fb/materialgriddata). |

### MaterialGridData {#constructor-3}

> **MaterialGridData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialGridData](/vext/ref/fb/materialgriddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialGridData](/vext/ref/fb/materialgriddata). |

## Properties

### {{% prop-heading "defaultMaterial" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "materialPairs" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)**[]

### {{% prop-heading "materialIndexMap" %}}

> **int**[]

### {{% prop-heading "defaultMaterialIndex" %}}

> **int**

### {{% prop-heading "materialProperties" %}}

> **[MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)**[]

### {{% prop-heading "interactionGrid" %}}

> **[MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialGridData](/vext/ref/fb/materialgriddata) type.

