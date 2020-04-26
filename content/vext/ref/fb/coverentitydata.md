---
title: CoverEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[CoverEntityData](#constructor-0)**() |
| **[CoverEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CoverEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[CoverEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CoverEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CoverEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CoverEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "width" >}} | float |
| {{< prop "coverType" >}} | [CoverType](/vext/ref/fb/covertype) |
| {{< prop "slots" >}} | [CoverSlot](/vext/ref/fb/coverslot)[] |
| {{< prop "rightEdgeBlocked" >}} | bool |
| {{< prop "topBlocked" >}} | bool |
| {{< prop "leftEdgeBlocked" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CoverEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CoverEntityData {#constructor-0}
> **CoverEntityData**()

Creates a new [CoverEntityData](/vext/ref/fb/coverentitydata) frostbite instance.

### CoverEntityData {#constructor-1}
> **CoverEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CoverEntityData](/vext/ref/fb/coverentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CoverEntityData {#constructor-2}
> **CoverEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [CoverEntityData](/vext/ref/fb/coverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [CoverEntityData](/vext/ref/fb/coverentitydata). |

### CoverEntityData {#constructor-3}
> **CoverEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CoverEntityData](/vext/ref/fb/coverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CoverEntityData](/vext/ref/fb/coverentitydata). |

### CoverEntityData {#constructor-4}
> **CoverEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CoverEntityData](/vext/ref/fb/coverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CoverEntityData](/vext/ref/fb/coverentitydata). |

### CoverEntityData {#constructor-5}
> **CoverEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CoverEntityData](/vext/ref/fb/coverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CoverEntityData](/vext/ref/fb/coverentitydata). |

### CoverEntityData {#constructor-6}
> **CoverEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverEntityData](/vext/ref/fb/coverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CoverEntityData](/vext/ref/fb/coverentitydata). |

## Properties
### {{% prop-heading "width" %}}
> **float**

### {{% prop-heading "coverType" %}}
> **[CoverType](/vext/ref/fb/covertype)**

### {{% prop-heading "slots" %}}
> **[CoverSlot](/vext/ref/fb/coverslot)**[]

### {{% prop-heading "rightEdgeBlocked" %}}
> **bool**

### {{% prop-heading "topBlocked" %}}
> **bool**

### {{% prop-heading "leftEdgeBlocked" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CoverEntityData](/vext/ref/fb/coverentitydata) type.

