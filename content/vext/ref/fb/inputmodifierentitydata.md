---
title: InputModifierEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[InputModifierEntityData](#constructor-0)**() |
| **[InputModifierEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InputModifierEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[InputModifierEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[InputModifierEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[InputModifierEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "action" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "scale" >}} | float |
| {{< prop "offset" >}} | float |
| {{< prop "enabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputModifierEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputModifierEntityData {#constructor-0}

> **InputModifierEntityData**()

Creates a new [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata) frostbite instance.

### InputModifierEntityData {#constructor-1}

> **InputModifierEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InputModifierEntityData {#constructor-2}

> **InputModifierEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). |

### InputModifierEntityData {#constructor-3}

> **InputModifierEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). |

### InputModifierEntityData {#constructor-4}

> **InputModifierEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). |

### InputModifierEntityData {#constructor-5}

> **InputModifierEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata). |

## Properties

### {{% prop-heading "action" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "scale" %}}

> **float**

### {{% prop-heading "offset" %}}

> **float**

### {{% prop-heading "enabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputModifierEntityData](/vext/ref/fb/inputmodifierentitydata) type.

