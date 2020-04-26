---
title: CriteriaStarData
---

Inherits from [CriteriaData](/vext/ref/fb/criteriadata)

## Summary

### Constructors

|  |
| --- |
| **[CriteriaStarData](#constructor-0)**() |
| **[CriteriaStarData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CriteriaStarData](#constructor-2)**(other: [CriteriaData](/vext/ref/fb/criteriadata)) |
| **[CriteriaStarData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "starTemplate" >}} | [CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CriteriaStarData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CriteriaStarData {#constructor-0}

> **CriteriaStarData**()

Creates a new [CriteriaStarData](/vext/ref/fb/criteriastardata) frostbite instance.

### CriteriaStarData {#constructor-1}

> **CriteriaStarData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CriteriaStarData](/vext/ref/fb/criteriastardata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CriteriaStarData {#constructor-2}

> **CriteriaStarData**(other: [CriteriaData](/vext/ref/fb/criteriadata))

Casts an instance of type [CriteriaData](/vext/ref/fb/criteriadata) to [CriteriaStarData](/vext/ref/fb/criteriastardata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CriteriaData](/vext/ref/fb/criteriadata) | The instance to cast to [CriteriaStarData](/vext/ref/fb/criteriastardata). |

### CriteriaStarData {#constructor-3}

> **CriteriaStarData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CriteriaStarData](/vext/ref/fb/criteriastardata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CriteriaStarData](/vext/ref/fb/criteriastardata). |

## Properties

### {{% prop-heading "starTemplate" %}}

> **[CriteriaStarCategoryData](/vext/ref/fb/criteriastarcategorydata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CriteriaStarData](/vext/ref/fb/criteriastardata) type.

