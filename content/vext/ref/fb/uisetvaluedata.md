---
title: UISetValueData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[UISetValueData](#constructor-0)**() |
| **[UISetValueData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UISetValueData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[UISetValueData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[UISetValueData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[UISetValueData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "intValue" >}} | int |
| {{< prop "floatValue" >}} | float |
| {{< prop "stringValue" >}} | string |
| {{< prop "boolValue" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UISetValueData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UISetValueData {#constructor-0}

> **UISetValueData**()

Creates a new [UISetValueData](/vext/ref/fb/uisetvaluedata) frostbite instance.

### UISetValueData {#constructor-1}

> **UISetValueData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UISetValueData](/vext/ref/fb/uisetvaluedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UISetValueData {#constructor-2}

> **UISetValueData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [UISetValueData](/vext/ref/fb/uisetvaluedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [UISetValueData](/vext/ref/fb/uisetvaluedata). |

### UISetValueData {#constructor-3}

> **UISetValueData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [UISetValueData](/vext/ref/fb/uisetvaluedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [UISetValueData](/vext/ref/fb/uisetvaluedata). |

### UISetValueData {#constructor-4}

> **UISetValueData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [UISetValueData](/vext/ref/fb/uisetvaluedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [UISetValueData](/vext/ref/fb/uisetvaluedata). |

### UISetValueData {#constructor-5}

> **UISetValueData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UISetValueData](/vext/ref/fb/uisetvaluedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UISetValueData](/vext/ref/fb/uisetvaluedata). |

## Properties

### {{% prop-heading "dataSource" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "intValue" %}}

> **int**

### {{% prop-heading "floatValue" %}}

> **float**

### {{% prop-heading "stringValue" %}}

> **string**

### {{% prop-heading "boolValue" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UISetValueData](/vext/ref/fb/uisetvaluedata) type.

