---
title: SocketData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SocketData](#constructor-0)**() |
| **[SocketData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SocketData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "boneRigidTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "unlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "boneId" >}} | int |
| {{< prop "boneName" >}} | string |
| {{< prop "availableObjects" >}} | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)[] |
| {{< prop "gearSlot" >}} | [GearSlot](/vext/ref/fb/gearslot) |
| {{< prop "socketType" >}} | [SocketType](/vext/ref/fb/sockettype) |
| {{< prop "usesDefaultObject" >}} | bool |
| {{< prop "excluded" >}} | bool |
| {{< prop "defaultEnableSocketEntities" >}} | bool |
| {{< prop "forceSocketEntitiesEnabled" >}} | bool |
| {{< prop "hideByZoomTransition" >}} | bool |
| {{< prop "hideByLightToggle" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SocketData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SocketData {#constructor-0}
> **SocketData**()

Creates a new [SocketData](/vext/ref/fb/socketdata) frostbite instance.

### SocketData {#constructor-1}
> **SocketData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SocketData](/vext/ref/fb/socketdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SocketData {#constructor-2}
> **SocketData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SocketData](/vext/ref/fb/socketdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SocketData](/vext/ref/fb/socketdata). |

## Properties
### {{% prop-heading "boneRigidTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "unlockAsset" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

### {{% prop-heading "boneId" %}}
> **int**

### {{% prop-heading "boneName" %}}
> **string**

### {{% prop-heading "availableObjects" %}}
> **[SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)**[]

### {{% prop-heading "gearSlot" %}}
> **[GearSlot](/vext/ref/fb/gearslot)**

### {{% prop-heading "socketType" %}}
> **[SocketType](/vext/ref/fb/sockettype)**

### {{% prop-heading "usesDefaultObject" %}}
> **bool**

### {{% prop-heading "excluded" %}}
> **bool**

### {{% prop-heading "defaultEnableSocketEntities" %}}
> **bool**

### {{% prop-heading "forceSocketEntitiesEnabled" %}}
> **bool**

### {{% prop-heading "hideByZoomTransition" %}}
> **bool**

### {{% prop-heading "hideByLightToggle" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SocketData](/vext/ref/fb/socketdata) type.

