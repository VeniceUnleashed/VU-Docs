---
title: WeaponDeployTimeModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponDeployTimeModifier](#constructor-0)**() |
| **[WeaponDeployTimeModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponDeployTimeModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponDeployTimeModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deployTime" >}} | float |
| {{< prop "disableZoomOnDeployTime" >}} | float |
| {{< prop "altDeployTime" >}} | float |
| {{< prop "altDeployId" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponDeployTimeModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponDeployTimeModifier {#constructor-0}

> **WeaponDeployTimeModifier**()

Creates a new [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier) frostbite instance.

### WeaponDeployTimeModifier {#constructor-1}

> **WeaponDeployTimeModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponDeployTimeModifier {#constructor-2}

> **WeaponDeployTimeModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier). |

### WeaponDeployTimeModifier {#constructor-3}

> **WeaponDeployTimeModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier). |

## Properties

### {{% prop-heading "deployTime" %}}

> **float**

### {{% prop-heading "disableZoomOnDeployTime" %}}

> **float**

### {{% prop-heading "altDeployTime" %}}

> **float**

### {{% prop-heading "altDeployId" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier) type.

