---
title: WeaponSpeedData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[WeaponSpeedData](#constructor-0)**() |
| **[WeaponSpeedData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponSpeedData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "zoomOutSpeed" >}} | float |
| {{< prop "zoomInSpeed" >}} | float |
| {{< prop "unDeploySpeed" >}} | float |
| {{< prop "deploySpeed" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponSpeedData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponSpeedData {#constructor-0}

> **WeaponSpeedData**()

Creates a new [WeaponSpeedData](/vext/ref/fb/weaponspeeddata) frostbite instance.

### WeaponSpeedData {#constructor-1}

> **WeaponSpeedData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponSpeedData](/vext/ref/fb/weaponspeeddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponSpeedData {#constructor-2}

> **WeaponSpeedData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponSpeedData](/vext/ref/fb/weaponspeeddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponSpeedData](/vext/ref/fb/weaponspeeddata). |

## Properties

### {{% prop-heading "zoomOutSpeed" %}}

> **float**

### {{% prop-heading "zoomInSpeed" %}}

> **float**

### {{% prop-heading "unDeploySpeed" %}}

> **float**

### {{% prop-heading "deploySpeed" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponSpeedData](/vext/ref/fb/weaponspeeddata) type.

