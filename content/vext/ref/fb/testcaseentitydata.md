---
title: TestCaseEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[TestCaseEntityData](#constructor-0)**() |
| **[TestCaseEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TestCaseEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TestCaseEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TestCaseEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TestCaseEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "timeOut" >}} | float |
| {{< prop "testGroup" >}} | string |
| {{< prop "testCaseName" >}} | string |
| {{< prop "stable" >}} | bool |
| {{< prop "enabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TestCaseEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TestCaseEntityData {#constructor-0}

> **TestCaseEntityData**()

Creates a new [TestCaseEntityData](/vext/ref/fb/testcaseentitydata) frostbite instance.

### TestCaseEntityData {#constructor-1}

> **TestCaseEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TestCaseEntityData](/vext/ref/fb/testcaseentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TestCaseEntityData {#constructor-2}

> **TestCaseEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). |

### TestCaseEntityData {#constructor-3}

> **TestCaseEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). |

### TestCaseEntityData {#constructor-4}

> **TestCaseEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). |

### TestCaseEntityData {#constructor-5}

> **TestCaseEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TestCaseEntityData](/vext/ref/fb/testcaseentitydata). |

## Properties

### {{% prop-heading "timeOut" %}}

> **float**

### {{% prop-heading "testGroup" %}}

> **string**

### {{% prop-heading "testCaseName" %}}

> **string**

### {{% prop-heading "stable" %}}

> **bool**

### {{% prop-heading "enabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TestCaseEntityData](/vext/ref/fb/testcaseentitydata) type.

